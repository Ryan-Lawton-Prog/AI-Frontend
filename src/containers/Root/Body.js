import React from "react";

export default class Body extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        loading: true,
        blogs: [{
            'author':'Ryan Lawton',
            'title': 'Default blog',
            'subtitle': 'why, just why',
            'date': 12341294,
            'time': 3,
            '_id': 1
        }]
    };
  }

  componentDidMount() {
    fetch("/blog/get_blogs", {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            var blogs = [];
            for (var key in result) {
                result[key]['_id'] = key;
                blogs.push(result[key]);
            }

            blogs.sort((a, b) => a.time - b.time);

            this.setState(state => ({
                loading: false,
                blogs: [...state.blogs, ...blogs]
            }))
            console.log(this.state.blogs);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log(error)
        }
    )
  }

  render() {
    return (
      <div className="Nav">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    {this.state.loading && <h1>Loading</h1>}

                    {!this.state.loading && this.state.blogs.map(blog => {
                        return (
                            <div key={blog._id}>
                                <div class="post-preview">
                                    <a href={`blog/`+blog._id}>
                                        <h2 class="post-title">{blog.title}</h2>
                                        <h3 class="post-subtitle">{blog.subtitle}</h3>
                                    </a>
                                    <p class="post-meta">
                                        Posted by 
                                        <a href="#!">{blog.author}</a>
                                        on {blog.date} 
                                    </p>
                                </div>
                                <hr />
                            </div>
                        )
                    })}

                    <div class="clearfix"><a class="btn btn-primary float-right" href="#!">Older Posts →</a></div>
                </div>
            </div>
        </div>
        <hr />
      </div>
    );
  }
}