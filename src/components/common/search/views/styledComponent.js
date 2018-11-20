import styled from 'styled-components'

const Search = styled.div `
  display: block;
  width: 7.1rem;
  height: .6rem;
  margin: .14rem auto 0;
  border-radius: .06rem;
  background-color: #f2f2f2;
`

const SearchIcon = styled.i `
  display: inline-block;
  width: .55rem;
  height: .6rem;
  text-align: center;
  line-height: .6rem;
  font-size: .3rem;
  color: gray;
  & > img {
    width: 60%;
    height: 60%;
  }
`

const SearchDefaultValue = styled.span `
  font-size: .3rem;
  color: gray;
`

export {
  Search,
  SearchIcon,
  SearchDefaultValue
}