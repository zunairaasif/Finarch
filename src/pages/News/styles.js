const styles = {
  news: {
    padding: 4,
    display: "flex",
    flexDirection: "column",
  },
  loader: {
    marginTop: 6,
    display: "flex",
    justifyContent: "center",
  },
  loaderColor: {
    color: "black",
  },
  noData: {
    marginTop: 6,
    alignSelf: "center",
  },
  container: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    transition: "transform .8s, margin .8s",
  },
  zoom: {
    marginTop: 10,
    display: "flex",
    marginBottom: 10,
    alignSelf: "center",
    transform: "scale(1.3)",
    justifyContent: "center",
    transition: "transform .8s, margin 1s",
  },
  scroll: {
    overflowX: "auto",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  flex: {
    display: "flex",
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
  img: {
    margin: "0 10px",
    userDrag: "none",
    pointerEvents: "none",
  },
  title: {
    display: "flex",
    marginBottom: 2,
  },
};
export default styles;
