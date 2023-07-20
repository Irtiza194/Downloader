const btn = document.getElementById("btn");
const input = document.getElementById("input");

btn.addEventListener("click", async () => {
  try {
    const response = await fetch(input.value);
    const file = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = new Date().getTime();
    link.click();
  } catch (error) {
    alert("Failed to download, please ensure that the link is correct");
  }
});
