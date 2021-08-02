import { Icon } from '@iconify/react';
import shoppingCartFill from '@iconify/icons-eva/shopping-cart-fill';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Badge } from '@material-ui/core';
import plusFill from '@iconify/icons-eva/plus-fill';
// import addthisIcon from '@iconify-icons/simple-icons/addthis';

const RootStyle = styled('div')(({ theme }) => ({
  zIndex: 999,
  right: 0,
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  alignItems: 'center',
  top: theme.spacing(16),
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  boxShadow: theme.customShadows.z20,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: theme.shape.borderRadiusMd,
  borderBottomLeftRadius: theme.shape.borderRadiusMd,
  transition: theme.transitions.create('opacity'),
  '&:hover': { opacity: 0.72 }
}));

export default function CartWidget() {
  return (
    <RootStyle>
      {/* <Badge showZero badgeContent={0} color="error" max={99}> */}
      <Icon icon={plusFill} width={24} height={24} color="#0e6cf0" />
      {/* </Badge> */}
    </RootStyle>
  );
}
