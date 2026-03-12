"use client";

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const ContactSalesForm = () => {
  const [phone, setPhone] = useState("");

  const handleChange = (newPhone: string) => {
    setPhone(newPhone);
  };

  const validationSchema = yup.object({
    fullName: yup.string().required("Full name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    companyName: yup.string().required("Company name is required"),
    companySize: yup.string().required("Company size is required"),
    refferalSource: yup.string().required("Refferal source is required"),
    message: yup.string().required("Message is required"),
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      companySize: "",
      refferalSource: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    const finalData = { ...data, phone };
    console.log(finalData);
    setPhone("");
    reset();
  };

  return (
    <Box component="div" width="100%">
      <form
        autoComplete="off"
        style={{ width: "100%" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={4}>
          <Grid size={12}>
            <TextField
              id="full-name"
              label="Full Name"
              variant="outlined"
              fullWidth
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              {...register("fullName")}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email")}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              id="company-name"
              label="Company Name"
              variant="outlined"
              fullWidth
              error={!!errors.companyName}
              helperText={errors.companyName?.message}
              {...register("companyName")}
            />
          </Grid>
          <Grid size={12}>
            <Controller
              name="companySize"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.companySize}>
                  <InputLabel id="company-size-label">Company Size</InputLabel>

                  <Select
                    {...field}
                    labelId="company-size-label"
                    label="Company Size"
                  >
                    <MenuItem value="10">Ten</MenuItem>
                    <MenuItem value="20">Twenty</MenuItem>
                    <MenuItem value="30">Thirty</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid size={12}>
            <MuiTelInput
              id="phone-number"
              label="Phone Number"
              value={phone}
              onChange={handleChange}
              defaultCountry="TZ"
              fullWidth
            />
          </Grid>
          <Grid size={12}>
            <Controller
              name="refferalSource"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.refferalSource}>
                  <InputLabel id="refferal-source-label">
                    How did you hear about us
                  </InputLabel>

                  <Select
                    {...field}
                    labelId="refferal-source-label"
                    label="How did you hear about us"
                  >
                    <MenuItem value="social-media">Social Media</MenuItem>
                    <MenuItem value="newsletter">Newsletter</MenuItem>
                    <MenuItem value="friend">Friend</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              id="message"
              label="How can we help"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              error={!!errors.message}
              helperText={errors.message?.message}
              {...register("message")}
            />
          </Grid>
          <Grid size={12}>
            <Button
              type="submit"
              sx={{
                borderRadius: 10,
                paddingY: 2,
                paddingX: 4,
                backgroundColor: "black",
                color: "white",
                width: "100%",
              }}
            >
              Send Inquiry
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactSalesForm;
