import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './ChapterSelectorList.css';

class ChapterSelectorList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    this.setState({ [target.name]: target.checked });
  }

  handleSubmit(e) {
    e.preventDefault();
    const selectedChapters = Object.entries(this.state).reduce((selected, [chapter, checked]) => {
      if (checked) selected.push(chapter);
      return selected;
    }, []);

    alert(selectedChapters);
  }

  chapterItems(chapters) {
    if (chapters === undefined) return [];

    return chapters.map((chapter, index) =>
      <div className="chapter-selector-item" key={index}>
        <Form.Check
          name={chapter}
          id={`chapter-${index}`}
          type="checkbox"
          label={chapter}
          checked={this.state.chapter}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }

  render() {
    const { chapters } = this.props.location.state ? this.props.location.state : [];

    return (
      <Form onSubmit={this.handleSubmit}>
        <h4><Form.Label>Select chapters to summarize</Form.Label></h4>
        {this.chapterItems(chapters)}
        <Button variant="primary" type="submit">Select</Button>
      </Form>
    );
  }

}

export default ChapterSelectorList;