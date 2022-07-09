import styled from "styled-components";
import {useCallback, useMemo} from "react";

interface TagProps {
    tag: string;
    onClickTag: (tag: string | undefined) => void;
    selected: boolean;
}

interface TagListProps {
    tagList: string[]
    onClickTag: (tag: string | undefined) => void;
    selectedTag: string | undefined;
}

function Tag({tag, onClickTag, selected}: TagProps) {
    const onClick = useCallback(() => onClickTag(selected ? undefined : tag), [selected]);
    return <_Tag className={selected ? 'selected' : ''} onClick={onClick}>{tag}</_Tag>
}

export default function TagList({tagList, onClickTag, selectedTag}: TagListProps) {
    const tagElementList = useMemo(() => {
        return tagList.map(tag => <Tag key={tag} tag={tag} onClickTag={onClickTag} selected={selectedTag === tag} />)
    }, [selectedTag, tagList])

    return <_TagList>{tagElementList}</_TagList>
}

const _TagList = styled.div`

`

const _Tag = styled.button`
  background-color: ${({theme}) => theme.colors.bg.secondary};
  border: none;
  border-radius: 10px;
  color: ${({theme}) => theme.colors.text.primary};
  padding: 0 10px;
  word-break: keep-all;
  cursor: pointer;
  
  &:not(:last-child) {
    margin-right: 8px;
  }
  
  &.selected {
    background-color: ${({theme}) => theme.colors.primary};
  }
`