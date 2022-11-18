import React, { useEffect, useRef, useState } from 'react';
import { useFetching } from 'resources/hooks/useFetching';
import 'pages/Asteroids/Asteroids.css';

import { Header } from 'components';

import Main from 'components/Asteroids/Main/Main';
import GetService from 'API/GetService';
import { positioning } from 'resources/helpers/asteroidsUtils/positioning';
import Footer from 'components/Asteroids/Footer/Footer';
import Navbar from 'components/Asteroids/Navbar/Navbar';

import { TAsteroid } from 'resources/helpers/asteroidsUtils/types';
import Loader from 'components/Loader/Loader';

const Asteroids = () => {

    // состояние списка информации об астероидах
    const [infoList, setInfoList] = useState<TAsteroid[][]>([])

    // ограничение на максимальное количество показываемых астероидов
    const MaxAsteroidsNumber = 10

    // получение данных 
    const {fetchInfo, fetchError} = useFetching( async () => {
    
        let response = await GetService.getInfo(setSourceRef, setUpdateDate);
        let slicedArray: TAsteroid[] = [], finalArray: TAsteroid[][] = []
        
        // слайс необходимого количества элементов
        if(response.length > MaxAsteroidsNumber) {
            slicedArray = response.slice(0, MaxAsteroidsNumber)
        } else {
            slicedArray = (response.length % 2 === 0)
                ? [...response]
                : response.slice(0, response.length-1)
        }

        // формирование двумерного массива
        for(let i = 0; i < slicedArray.length; i+=2) {
            finalArray = [...finalArray, slicedArray.slice(i, i+2)]
        }
        setInfoList([...finalArray])
    })

    useEffect( () => {
        fetchInfo()
    }, [])

    // ссылка на контейнер с системой астероидов
    const marginWrapper = useRef() as React.LegacyRef<HTMLDivElement>

    // ссылка на объект NASA
    const [sourceRef, setSourceRef] = useState(null)

    // наблюдатель за изменением состояния полученных данных
    useEffect( () => {
        if(infoList.length) {
            positioning(marginWrapper, MaxAsteroidsNumber)
        }
    }, [infoList])

    // состояние выбранного астероида для вывода информации о нём
    const [selectedAsteroid, setSelectedAsteroid] = useState(null)

    // дата обновления информации
    const [updateDate, setUpdateDate] = useState(null)

    return (
        <div className='App'>
            <Header />
            <Navbar />
            {sourceRef && updateDate
            ?
                <>
                    <Main
                        refProp={marginWrapper}
                        infoList={infoList}
                        selected = {setSelectedAsteroid}
                        asteroidInfo={selectedAsteroid}
                        sourceRef={sourceRef}
                    />
                    <Footer date={updateDate} />
                </>
            :
                <Loader />
        }
        </div>
    );
}

export default Asteroids;