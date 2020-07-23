export default async function sendRequest(URL, form) {
  let formData = new FormData(form);

  fetch(URL, {
    method: "POST",
    body: formData,
  })
    .then((r) => {
      console.log(r);
    })
    .catch((e) => {
      console.log(e);
    });
}
