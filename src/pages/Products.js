import { useFormik } from 'formik';
import { useState } from 'react';
import { Container, Stack, Typography } from '@material-ui/core';
import Page from '../components/Page';
import {
  ProductSort,
  ProductList,
  ProductCartWidget,
  AddProduct
} from '../components/_dashboard/products';
import PRODUCTS from '../_mocks_/products';

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const formik = useFormik({
    initialValues: {
      gender: '',
      category: '',
      colors: '',
      priceRange: '',
      rating: ''
    },
    onSubmit: () => {
      setOpenFilter(false);
    }
  });

  const { resetForm, handleSubmit } = formik;

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleResetFilter = () => {
    handleSubmit();
    resetForm();
  };

  return (
    <Page title="Products | NU Innovation Tech Hub">
      <Container>
        <div>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Products
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap-reverse"
            alignItems="center"
            justifyContent="flex-end"
            sx={{ mb: 7 }}
          >
            <Stack direction="column" spacing={1} flexShrink={0} sx={{ my: 0 }}>
              <AddProduct
                formik={formik}
                isOpenFilter={openFilter}
                onResetFilter={handleResetFilter}
                onOpenFilter={handleOpenFilter}
                onCloseFilter={handleCloseFilter}
              />
              <select id="filter" className="form-select form-select-sm mb-3">
                <option selected value="Recent">
                  Recent
                </option>
                <option value="Relevance">Relevance</option>
              </select>
            </Stack>
          </Stack>
        </div>

        <ProductList products={PRODUCTS} />
        {/* <ProductCartWidget /> */}
      </Container>
    </Page>
  );
}
