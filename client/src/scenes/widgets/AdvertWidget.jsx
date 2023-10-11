import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;


    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad </Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src="https://socio-foyo.onrender.com/assets/info4.jpeg"
                style={{ borderRadius: "0.75rem", margin:"0.75rem"}}
            />
            <FlexBetween>
                <Typography color={main}>MikaCosemetics</Typography>
                <Typography color={medium}>MikaCosemetics</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem">
                Your pathway to stunning and immaculate beauty and makes sure your skin is shining like a light
            </Typography>
        </WidgetWrapper>
    )

}

export default AdvertWidget;