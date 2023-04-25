git ls-tree -r --name-only main ./src/pages/posts | while read filename; do
  unixtime=$(git log -1 --format="%at" -- "${filename}")
  echo ${unixtime}
  touchtime=$(date -r ${unixtime} +'%Y%m%d%H%M.%S')
  touch -t ${touchtime} "${filename}"
  done
