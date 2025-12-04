import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteJobAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const isFavorite = useSelector((state) =>
    state.mainReducer.favorites.some((job) => job._id === data._id)
  );
  const loading = useSelector((state) => state.loErReducer.loading);
  const error = useSelector((state) => state.loErReducer.error);

  return (
    <>
      {loading && <div className="spinner-border" role="status"></div>}

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {!loading && !error && (
        <Row
          className="mx-0 mt-3 p-3 d-flex align-items-center"
          style={{ border: "1px solid #00000033", borderRadius: 4 }}
        >
          <Col xs={3}>
            <Link
              className="text-decoration-none fw-bold"
              to={`/${data.company_name}`}
            >
              {data.company_name}
            </Link>
          </Col>
          <Col xs={9}>
            <a
              className="text-decoration-none text-black"
              href={data.url}
              target="_blank"
              rel="noreferrer"
            >
              {data.title}
            </a>
          </Col>
          <Col xs={12} className="text-end">
            <Button
              variant=""
              size="sm"
              onClick={() => dispatch(addFavoriteJobAction(data))}
            >
              <i
                className={
                  isFavorite
                    ? "fs-5 text-warning bi bi-star-fill"
                    : "fs-5 bi bi-star"
                }
              ></i>
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Job;
