export const login = (): void => {
  const myButton = document.getElementById("myButton");

  if (myButton) {
    myButton.onclick = () => {
      console.log("Button clicked!");
    };
  }
};
