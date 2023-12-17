const styles = {
  projects: {
    padding: 4,
    display: "flex",
    flexDirection: "column",
  },
  tabs: {
    display: "flex",
    marginBottom: 5,
    justifyContent: "center",
    maxWidth: { xs: 320, sm: "100%" },
  },
  tab: {
    textTransform: "none",
    color: "black !important",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  tabColor: {
    textTransform: "none",
    color: "black !important",
    backgroundColor: "#f5f5f5",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
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
    marginTop: 3,
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    transition: "transform .8s, margin .8s",
  },
  animation: {
    width: "100%",
    cursor: "grab",
    overflowX: "auto",
    whiteSpace: "nowrap",
  },
  animate: {
    marginTop: 100,
    display: "flex",
    marginBottom: 100,
    overflowX: "auto",
    alignSelf: "center",
    transform: "scale(1.3)",
    justifyContent: "center",
    transition: "transform .8s, margin 1s",
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
