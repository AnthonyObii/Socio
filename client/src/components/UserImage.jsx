import {Box} from "@mui/material";

const UserImage = ({image, size = "60px"}) => {
    return(
        <Box width={size} height={size}>
            <img
              style={{ objectFit: "cover", borderRadius: "50px"}}
              width={size}
              height={size}
              alt="user"
              src={`https://socio-foyo.onrender.com/assets/${image}`}


            />
        </Box>
    )
}


export default UserImage;