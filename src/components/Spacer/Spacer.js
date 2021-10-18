import styled from 'styled-components/macro';

function getHeight({ axis, size }) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }) {
  return axis === 'vertical' ? 1 : size;
}

const Spacer = styled.span`
`;

export default Spacer;
