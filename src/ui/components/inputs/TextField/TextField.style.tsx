import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextFieldStyled = styled(TextField)`
    .MuiInputBase-root {
        background-color: ${({ theme }) => theme.palette.grey[50]};
    }

    .MuiOutLinedInput-notchedOutLine {
        border-color: ${({ theme }) => theme.palette.grey[100]};
    }

`;