import React,  {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookDetail from '../components/BookDetail'

class BookDetailPage extends Component{
    constructor(){
        super();
        this.state={}
    }

    render(){
        return(
            <div>
                <Header/>
                <BookDetail/>
                <Footer/>
            </div>
        )
    }
}

export default BookDetailPage;