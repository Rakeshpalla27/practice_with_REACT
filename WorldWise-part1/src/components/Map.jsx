import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>
        POSTION: {lat},{lng}
        <button
          onClick={() => {
            setSearchParams({ lat: 34, lng: 45 });
          }}
        >
          change postion
        </button>
      </h1>
    </div>
  );
}

export default Map;
