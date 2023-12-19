const styles = {
  toolbar: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    display: "flex",
    paddingTop: "5px",
    paddingBottom: "5px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toolbarView: {
    flex: 1,
    marginLeft: 2,
    marginRight: 2,
    display: "flex",
    paddingTop: "5px",
    paddingBottom: "5px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  quote: {
    display: "flex",
    borderRadius: 2,
    paddingLeft: "20px",
    paddingRight: "20px",
    alignItems: "center",
    border: "1px solid grey",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0.5px 0.5px grey",
      backgroundColor: "#e9e6f2",
    },
  },
  quotePage: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  containerView: {
    paddingTop: 3,
    display: "flex",
    paddingBottom: 3,
    flexDirection: "column",
  },
  font: {
    fontSize: 40,
  },
  justify: {
    justifyContent: "space-between",
  },
  align: {
    justifyContent: "center",
  },
  icon: {
    fontSize: 40,
    color: "black",
  },
  error: {
    color: "#d63b3b",
  },
  flex: {
    display: "flex",
  },
  checkbox: {
    width: "20px",
    height: "20px",
    color: "black",
  },
  display: {
    display: "flex",
    justifyContent: "center",
  },
  info: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  lastStep: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
  },
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
  margin: {
    marginBottom: 3,
  },
  wrap: {
    display: "flex",
    marginBottom: 2,
  },
  stepperCurrent: {
    width: 40,
    height: 4,
    backgroundColor: "grey",
  },
  stepperCompleted: {
    width: 40,
    height: 4,
    backgroundColor: "black",
  },
  block: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
  },
  serviceBox: {
    height: 200,
    width: 180,
    padding: 1,
    borderRadius: 2,
    display: "flex",
    justifyContent: "center",
    border: "1px solid black",
    transformStyle: "preserve-3d",
    transition: "transform 0.5s",
  },
  front: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
  },
  name: {
    fontSize: 20,
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
  propertyBox: {
    height: 110,
    width: 140,
    padding: 1,
    borderRadius: 2,
    display: "flex",
    justifyContent: "center",
    border: "1px solid black",
    transformStyle: "preserve-3d",
    transition: "transform 0.5s",
  },
  property: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  btn: {
    height: 50,
    backgroundColor: "black",
    "&:hover": { backgroundColor: "black" },
  },
  download: {
    width: 500,
    height: 50,
    backgroundColor: "black",
    "&:hover": { backgroundColor: "black" },
  },
  shop: {
    padding: 1,
    borderRadius: 2,
    border: "1px solid grey",
    "&:hover": {
      cursor: "pointer",
    },
  },
  menu: {
    padding: 1,
    borderRadius: 2,
    display: "flex",
    alignItems: "center",
    border: "1px solid grey",
    "&:hover": {
      cursor: "pointer",
    },
  },

  //************ Drawer *********** */

  drawerToolbar: {
    justifyContent: "flex-end",
  },
  list: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
};
export default styles;
