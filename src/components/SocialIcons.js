import React from 'react'
// import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import SocialButton from './SocialButton'

// const SocialContainer = styled.div`
//   display: flex;
//   flex-direction: ${props =>
//     props.flexDirection ? props.flexDirection : 'column'};
//   align-items: center;
//   justify-content: space-between;
//   width: ${props => props.width || 'auto'};
//   .button {
//     margin: ${rhythm(1 / 3)} 0;
//   }
// `

// function SocialIcons(props) {
//   return (
//     <SocialContainer {...props}>
//       <SocialButton className="button" type="github" {...props} />
//       <SocialButton className="button" type="twitter" {...props} />
//       <SocialButton className="button" type="feed" {...props} />
//     </SocialContainer>
//   )
// }

function SocialIcons(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: props.width,
      }}
    >
      <SocialButton
        style={{ margin: `${rhythm(1 / 3)} 0` }}
        className="button"
        type="github"
        {...props}
      />
      <SocialButton
        style={{ margin: `${rhythm(1 / 3)} 0` }}
        className="button"
        type="twitter"
        {...props}
      />
      <SocialButton
        style={{ margin: `${rhythm(1 / 3)} 0` }}
        className="button"
        type="feed"
        {...props}
      />
    </div>
  )
}

export default SocialIcons
