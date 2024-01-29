# Branch Maker

`v2`


https://branchmaker.vercel.app/


```javascript

// version 3 - extract from id and title

const radar = 'rdar://119949401 ([FRONT][BUG][QA]: i am the face)'

const regex = {
  radar: /rdar:\/\/\d+/,
  brackets: /\(|\[\w+\]|:|\)/g,
  spaces: /\s/g,
  nan: /\D+/
}

const types = ['bug', 'task']; // enh

const radarNumber = radar.match(regex.radar)[0].replace(regex.nan, '')

const type = types.find(t => radar.toLowerCase().includes(t))

const removeRadarNumber = radar.replace(regex.radar, '').trim()

const removeTags = removeRadarNumber.replace(regex.brackets, '').trim()

const formatText = removeTags.replace(regex.spaces, '-').toLowerCase()

const result = `${type}/${radarNumber}-${formatText}`

result; // 'bug/119949401-i-am-the-face'
```
