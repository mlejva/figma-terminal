const { widget } = figma;
const { useEffect, Text } = widget;


// This widget will open an Iframe window with buttons to show a toast message and close the window.
function Widget() {
  useEffect(() => {
    figma.ui.onmessage = (msg) => {
      if (msg.type === "show") {
        figma.notify("Hello widget");
      }
      if (msg.type === "close") {
        figma.closePlugin();
      }
    };
  });

  return (
    <Text
      fontSize={24}
      fontFamily="Roboto"
      onClick={
        // Use async callbacks or return a promise to keep the Iframe window
        // opened. Resolving the promise, closing the Iframe window, or calling
        // "figma.closePlugin()" will terminate the code.
        () =>
          new Promise((resolve) => {
            figma.showUI(`

            <script src="https://storage.googleapis.com/devbook-terminal/devbook4.js"></script>
            `);
          })
      }
    >
      Open Terminal
    </Text>
  );
}

widget.register(Widget);
