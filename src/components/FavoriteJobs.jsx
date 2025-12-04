import { Col, Row, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavoriteJobAction } from "../redux/actions";

const FavoriteJobs = () => {
  const favorites = useSelector((currentState) => {
    return currentState.mainReducer.favorites;
  });

  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <Link className="display-4 text-decoration-none" to="/">
            Favorite Jobs
          </Link>
          {favorites.length === 0 && <h3>No favorite jobs yet</h3>}
          {favorites.map(
            (jobData) =>
              console.log(jobData) || (
                <Row
                  key={jobData._id}
                  className="mx-0 mt-3 p-3"
                  style={{ border: "1px solid #00000033", borderRadius: 4 }}
                >
                  <Col xs={3}>
                    <Link
                      className="text-decoration-none fw-bold text-black"
                      to={`/${jobData.company_name}`}
                    >
                      {jobData.company_name}
                    </Link>
                  </Col>
                  <Col xs={9}>
                    <a
                      className="text-decoration-none text-black"
                      href={jobData.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {jobData.title}
                    </a>
                  </Col>
                  <Col xs={12} className="text-end">
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() =>
                        dispatch(removeFavoriteJobAction(jobData._id))
                      }
                    >
                      <i className="bi bi-trash-fill"></i>
                    </Button>
                  </Col>
                </Row>
              )
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FavoriteJobs;
