import React, { Component } from 'react'
import AnchorButton from './AnchorButton';

class NewsItem extends Component {
    render() {
        const { title, description, src, href, author, date} = this.props;
        return (
            <div className="card">
            <a href={href}>
                <img src={src} className="card-img-top" alt="..." />
                </a>
            <div className="card-body">
            <div className="d-flex mb-3 justify-content-center">
                    <span className='p-1 mx-1 bg-light rounded-3'>{author? author: "Unknown"}</span>
                    <span className='p-1 mx-1 bg-light rounded-3'>{date.split("T")[0]}</span>
            </div>
                    <a href={href} className='text-decoration-none text-dark'>
                        <h5 className="card-title">{title? title.slice(0, 35): ""}</h5>
                    </a>
                <p className="card-text">{description?description.slice(0, 80): ""}...</p>
                <AnchorButton text="Read more" target="_blank" href={href} type="success" />
            </div>
            </div>
        )
    }
}
export default NewsItem;