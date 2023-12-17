const styles = {
  loader: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "black",
  },
  loaderColor: {
    color: "white",
  },
  news: {
    padding: 4,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  noData: {
    marginTop: 5,
  },
  container: {
    marginTop: 3,
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    transition: "transform .8s, margin .8s",
  },
  animation: {
    width: "100%",
    marginTop: 50,
    cursor: "grab",
    marginBottom: 50,
    overflowX: "auto",
    whiteSpace: "nowrap",
  },
  animate: {
    marginTop: 13,
    display: "flex",
    marginBottom: 13,
    overflowX: "auto",
    alignSelf: "center",
    transform: "scale(1.3)",
    justifyContent: "center",
    transition: "transform .8s, margin .8s",
  },
  title: {
    display: "flex",
    marginBottom: 2,
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  wrapperView: {
    display: "flex",
    marginBottom: 5,
    justifyContent: "space-between",
  },
  info: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
};
export default styles;
