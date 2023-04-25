git ls-tree -r --name-only HEAD | while read filename; do
  unixtime=$(git log -1 --format="%at" -- "${filename}")
  touchtime=$(date -r ${unixtime} +'%Y%m%d%H%M.%S')
  touch -t ${touchtime} "${filename}"
  done
