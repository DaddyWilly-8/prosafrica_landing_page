// form submit
const inquiryForm = document.getElementById('inquiryForm');
inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(inquiryForm);
    const data = Object.fromEntries(formData.entries());

    fetch("/get-started", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(res => {
        console.log('response: ', res)
    });
    console.log('form submitted: ', data)
})