const styles = {
  team: {
    marginTop: 7,
    display: "flex",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 6,
    flexDirection: "column",
  },
  teamView: {
    marginTop: 7,
    display: "flex",
    paddingLeft: 4,
    paddingRight: 4,
    paddingBottom: 6,
    flexDirection: "column",
  },
  heading: {
    textTransform: "uppercase",
  },
  description: {
    display: "flex",
    paddingLeft: 14,
    paddingRight: 14,
    marginTop: "1px",
    justifyContent: "center",
  },
  descriptionView: {
    display: "flex",
    marginTop: "1px",
    justifyContent: "center",
  },
  subServices: {
    marginTop: 1,
    justifyContent: "center",
  },
  loader: {
    marginTop: 3,
  },
  loaderColor: {
    color: "black",
  },
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  image: {
    width: "130px",
    height: "130px",
    borderRadius: 50,
    overflow: "hidden",
    border: "1px solid grey",
  },
  serviceBox: {
    minHeight: 250,
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 4,
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    transition: "transform 0.5s",
    transformStyle: "preserve-3d",
  },
  front: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
  },
  name: {
    fontSize: 25,
  },
  back: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
  },
  service: {
    fontSize: 16,
    padding: "5px",
    fontWeight: "bold",
  },
  backContent: {
    padding: 1,
    display: "flex",
    flexDirection: "column",
  },
  details: {
    textAlign: "center",
  },
};
export default styles;
