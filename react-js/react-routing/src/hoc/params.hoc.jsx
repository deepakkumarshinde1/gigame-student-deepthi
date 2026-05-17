import { useParams } from "react-router-dom";

export function handelParams(Component){
    return (props)=>{
      let {id} = useParams();
        return (
          <>
            <Component {...props} params_id={id} />
          </>
        );
    }
}

