import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Button, Container, Stack, Typography } from '@material-ui/core';
import Page from '../components/Page';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../components/_dashboard/blog';
import POSTS from '../_mocks_/blog';
import AddBlogModal from '../components/_dashboard/blog/AddBlogModal';
import { useState } from 'react';
import { useFormik } from 'formik';

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

export default function Blog() {
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
    <Page title="Dashboard: Blog | NU Innovation Tech Hub">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Articles
          </Typography>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <AddBlogModal
              formik={formik}
              isOpenFilter={openFilter}
              onResetFilter={handleResetFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />

            {/* <Button
            variant="outlined"
            color="secondary"
            component={RouterLink}
            to="#"
            endIcon={<Icon icon={plusFill} />}
          >
            New Post
          </Button> */}
          </Stack>
        </Stack>

        {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack> */}

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
