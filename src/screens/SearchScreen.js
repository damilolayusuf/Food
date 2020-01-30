import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, restaurants, errm] = useResults();
    
    const filterResultsByPrice = (price)=>{

        return restaurants.filter((restaurants)=>{
            return restaurants.price === price;
        })


    }
    console.log(restaurants);
    return ( 
        <View style = {{flex:1}}>
            <SearchBar 
                term = {term} 
                onTermSubmit = {()=>{
                    searchAPI(term)
                }}
                onTermChange = {(newTerm)=>{setTerm(newTerm)}}/>
           { errm ? <Text>{errm}</Text> : null}
            <ScrollView>
            <ResultsList  restaurants={filterResultsByPrice('$')}   title = "Cost Effective" />
            <ResultsList  restaurants={filterResultsByPrice('$$')} title = "Bit Pricier"/>
            <ResultsList  restaurants={filterResultsByPrice('$$$')} title = "Big Spender"/>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;
