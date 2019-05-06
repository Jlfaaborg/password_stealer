import { connect } from "react-redux";
import table from "../presentational/table"

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
  )(table)
  
  export default App;