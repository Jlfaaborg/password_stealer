import { connect } from "react-redux";
import form from "../presentational/form";



const mapStateToProps = (state: any) => {
    return {
        users: state
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
  )(form)
  
  export default App;