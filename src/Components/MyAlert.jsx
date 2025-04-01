import { Alert } from "react-bootstrap";

const MyAlert = function () {
  return (
    <Alert variant="success" className=" mt-5 pt-4">
      <Alert.Heading className="text-black fs-1 text-center mb-0 ">
        Benvenuto nella libreria epicode!
      </Alert.Heading>
      <p>Qui potrai trovare tutti i libri che desideri!</p>
      <hr />
      <p className="mb-0">Assicurati di consigliarla anche ai tuoi amici!</p>
    </Alert>
  );
};
export default MyAlert;
