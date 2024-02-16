import ReactPortal from "../ReactPortal";
import Spinner from "../Spinner";
import { Overlay } from "./styles";

interface LoaderProps {
  isLoading: boolean;
}

export function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay data-testid="overlay">
        <Spinner size={64} data-testid="spinner" />
      </Overlay>
    </ReactPortal>
  );
}
