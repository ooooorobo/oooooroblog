git ls-tree -r --name-only main ./src/pages/posts | while read filename; do
  unixtime=$(git log --follow --format=%at --date default ${filename} | tail -1)
  touchtime=$(date -r ${unixtime} +'%Y%m%d%H%M.%S')
  touch -t ${touchtime} "${filename}"
done
