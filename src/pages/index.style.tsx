import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FormElementsContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(5)};
    max-width: 650px;
    margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const ProfissionalsPaper = styled(Paper)`
    margin: 0 auto ${({ theme }) => theme.spacing(10)};
    padding: ${({ theme }) => theme.spacing(7)};

    ${({ theme }) => theme.breakpoints.down('md')}{
        &.MuiPaper-root{
            padding:0;
            box-shadow: none;
        }
    };

`;

export const ProfissionalsContainer = styled('div')`
    display: grid;

    ${({ theme }) => theme.breakpoints.up('md')}{
        grid-template-columns: repeat(2, 1fr);
        gap: ${({ theme }) => theme.spacing(6)};
    };

    ${({ theme }) => theme.breakpoints.down('md')}{
        margin-left: ${({ theme }) => theme.spacing(-2)};
        margin-right: ${({ theme }) => theme.spacing(-2)};
        > :nth-of-type(odd){
            background-color: ${({ theme }) => theme.palette.background.paper}
        }
    };

`;