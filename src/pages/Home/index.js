import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import Header from "../../partials/Header";
import Container from "../../partials/Container";

import Card from "../../components/Card";
import Checkbox from "../../components/Checkbox";
import Dropdown from "../../components/Dropdown";

import styles from "./Home.module.css";

const Home = () => {
    const { register, watch } = useForm();
    const [ products, setProducts ] = useState([]);
    const [ episodes, setEpisodes ] = useState([]);
    const search = watch("search", "");
    const episode = watch("episodes", "");
    const filter = watch("filter", "");

    console.log(search);
    useEffect(() => {
        axios.get("https://h3wapzopz2.execute-api.ap-southeast-2.amazonaws.com/v1/api/cinemaworld/movies").then(result => {
            setProducts(result.data.data);
        });
        axios.get("https://h3wapzopz2.execute-api.ap-southeast-2.amazonaws.com/v1/api/cinemaworld/movies/episodes").then(result => {
            setEpisodes(result.data.data);
        });
    }, []);

    useEffect(() => {
        axios.get(`https://h3wapzopz2.execute-api.ap-southeast-2.amazonaws.com/v1/api/cinemaworld/movies?&${(search) ? `search=${search}` : ``}&${(filter) ? `sort_by=price&order=${filter}` : ``}&${(episode) ? `episode=${episode}` : ``}`).then(result => {
            setProducts(result.data.data);
        });
    }, [ search, filter, episode ]);

    return (
        <React.Fragment>
            <Header register={ register } />
            <Container>
                <div className={ styles.left }>
                    <div className={ styles.left_header }>
                        <div className={ styles.title }>Episodes</div>
                        <div className={ styles.filter_container }>
                            { episodes.map(episode => (
                                <Checkbox
                                    register={ register }
                                    name={ episode.name }
                                    label={ `${episode.value} episodes` }
                                    value={ episode.value }
                                />
                            )) }
                        </div>
                    </div>
                </div>
                <div className={ styles.right }>
                    <div className={ styles.right_header }>
                        <div className={ styles.title }>Movie List</div>
                        <div className={ styles.select }>
                            <Dropdown
                                register={ register }
                                data={[
                                    {
                                        value: "1", text: "Price - Ascending"
                                    }, {
                                        value: "-1", text: "Price - Descending"
                                    }
                                ]}
                            />
                        </div>
                    </div>
                    <div className={ styles.card_container }>
                        { products.map(product => (
                            <div key={ product._id } className={ styles.card }>
                                <Card
                                    title={ product.name }
                                    episode={ product.episode }
                                    price={ product.price }
                                />
                            </div>
                        )) }
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default Home;