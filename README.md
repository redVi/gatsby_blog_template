# Gatby site

# Components: import and use

## Tip
```jsx
import { Tip } from "components/tip"

<Tip heading="Warning" type="danger">
Tip's text
</Tip>
```

## Video
```jsx
import { Video } from "components/video"

<Video src="/videos/react-render-props-checkboxes.mp4" type="video/mp4" />
```

## Tabs
```jsx
import { Tabs, Tab } from "components/tabs"

<Tabs headings={['useContext', 'Context.Consumer']}>
<Tab>

useContext
</Tab>

<Tab>

Context.Consumer
</Tab>
</Tabs>
```

## Links
```jsx
import { Link } from 'gatsby'

<Link to={`/posts/slug/`}>Link header</Link>
```
