import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

function App() {
  const onScanSuccess = (decodedText, decodedResult) => {
    console.log(`Code matched = ${decodedText}`, decodedResult);
    alert(JSON.stringify(decodedResult))
  }

  const onScanFailure = (error) => {
    console.error(`Code Scan Error ${error}`);
  }

  useEffect(() => {
    const html5QrcodeScanner = new Html5QrcodeScanner("scanner", {fps: 10, qrbox: {width: 250, height: 250}, disableFlip: false}, false);

    html5QrcodeScanner.render(onScanSuccess, onScanFailure)
  }, [])

  return (
    <div id="scanner" width="600px">
      
    </div>
  );
}

export default App;
