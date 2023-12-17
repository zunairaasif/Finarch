const styles = {
  about: {
    marginTop: 7,
    display: "flex",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 6,
    flexDirection: "column",
  },
  aboutView: {
    marginTop: 7,
    display: "flex",
    paddingLeft: 13,
    paddingRight: 13,
    paddingBottom: 6,
    flexDirection: "column",
  },
  heading: {
    textTransform: "uppercase",
  },
  description: {
    marginTop: 3,
    display: "flex",
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "column",
  },
  descriptionView: {
    marginTop: 3,
    display: "flex",
    flexDirection: "column",
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
    transformStyle: "preserve-3d",
    transition: "transform 0.5s",
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
};
export default styles;
