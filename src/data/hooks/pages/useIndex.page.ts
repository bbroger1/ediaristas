import { useState, useMemo } from 'react';
import { UserShortInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/ApiService';

export default function useIndex() {
    const [cep, setCep] = useState(''),
        [error, setError] = useState(''), //erro
        [search, setSearch] = useState(false), //buscaFeita
        [loader, setLoader] = useState(false), //carregando
        [profissionals, setProfissionals] = useState([] as UserShortInterface[]), //diaristas
        [moreProfissionals, setMoreProfissionals] = useState(0), //diaristasRestantes
        validatedCep = useMemo(() => {
            return ValidationService.cep(cep);
        }, [cep]);

    async function searchProfissionals(cep: string) {
        setSearch(false); //setBuscaFeita
        setLoader(true); //setCarregando
        setError(''); //setErro

        try {
            const { data } = await ApiService.get<{
                diaristas: UserShortInterface[],
                quantidade_diaristas: number
            }>('/api/diaristas-cidade?cep=' + cep.replace(/\D/g, ''));
            setProfissionals(data.diaristas); //setDiaristas
            setMoreProfissionals(data.quantidade_diaristas); //setDiaristasRestantes

            setSearch(true); //setBuscaFeita
            setLoader(false); //setCarregando
        } catch (error) {
            setError('Cep não encontrado'); //setErro
            setLoader(false); //setCarregando
        }
    };

    return {
        cep,
        setCep,
        error,
        search,
        loader,
        profissionals,
        setProfissionals,
        moreProfissionals,
        validatedCep,
        searchProfissionals,
    }

}