import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
}

export const Meta = ({
  title,
  description = 'Learner & builder focusing on education.',
}: Props) => {
  return (
    <Head>
      <title>{title ? `${title} – Mingjie Jiang` : 'Mingjie Jiang'}</title>
      <meta name='description' content={description} />
    </Head>
  );
};
