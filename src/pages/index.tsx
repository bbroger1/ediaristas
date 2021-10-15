import type { NextPage } from 'next';
import SafeEnviroment from 'ui/components/feedback/SafeEnviroment/SafeEnviroment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography, Container, CircularProgress } from '@mui/material';
import { FormElementsContainer, ProfissionalsPaper, ProfissionalsContainer } from './index.style';
import useIndex from 'data/hooks/pages/useIndex.page';

const Home: NextPage = () => {

  const {
    cep,
    setCep,
    error,
    search,
    searchProfissionals,
    loader,
    profissionals,
    moreProfissionals,
    validatedCep
  } = useIndex();

  return (
    <div>
      <SafeEnviroment />
      <PageTitle
        title={'Conheça as profissionais.'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua região.'}
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {error && <Typography color={'error'}>{error}</Typography>}

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
            disabled={!validatedCep || loader}
            onClick={() => searchProfissionals(cep)}
          >
            {loader ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementsContainer>

        {search && (profissionals.length > 0 ?
          <ProfissionalsPaper>
            <ProfissionalsContainer>
              {profissionals.map((profissional, index) => {
                return (
                  < UserInformation
                    key={index}
                    name={profissional.nome_completo}
                    picture={profissional.foto_usuario}
                    rating={profissional.reputacao}
                    description={profissional.cidade}
                  />
                )
              })}
            </ProfissionalsContainer>

            <Container sx={{ textAlign: 'center' }}>
              {moreProfissionals > 0 && (
                <Typography align={'center'} mt={3} color={'textPrimary'}>
                  ... e mais {moreProfissionals} {moreProfissionals > 1 ? 'profissionais' : 'profissional'} em sua região
                </Typography>
              )}
              <Button variant={'contained'} color={'secondary'} sx={{ mt: 5 }}>Ver todos os Profissionais</Button>
            </Container>
          </ProfissionalsPaper>
          : (
            <Typography align={'center'} mb={3} color={'textPrimary'}>
              Ainda não temos diaristas que atendem na sua região.
            </Typography>
          )
        )}

      </Container>
    </div >
    //o componente deve ser chamado com o seu nome e iniciar em letra maiuscula
  )
}

export default Home
