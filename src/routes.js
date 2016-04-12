import { Router, Route, hashHistory, browserHistory } from 'react-router'
import IndexPage from './RouteHandlers/IndexPage'
import Articles from './RouteHandlers/Articles'
import ArticlePage from './RouteHandlers/ArticlePage'
import React from 'react'

export default (
    <Router history = {browserHistory} >
        <Route path="/" component = {IndexPage} >
            <Route path = "articles" component = {Articles} >
                <Route path = ":id" component = {ArticlePage} />
            </Route>
        </Route>
    </Router>
)