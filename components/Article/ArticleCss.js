export default () => (
  <style jsx="true">{`
    img {
      width: 100%;
      height: auto;
    }

    .lead {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      font-size: 21px;
      font-style: italic;
    }

    .lead__text {
      margin-bottom: 20px;
    }

    .lead__image-wrap {
      flex: none;
      width: 50%;
      margin: 0 auto;
      height: auto;
    }

    .lead__image {
      width: 100%;
      height: auto;
    }

    .par-title {
      margin-bottom: 10px;
      font-size: 21px;
      font-weight: bold;
    }

    .par {
      font-size: 16px;
      margin-bottom: 20px;
    }

    .par_back {
      padding: 30px;
      background-color: #f9f7f4;
    }

    .par_with-notif {
      display: flex;
      flex-direction: column;
    }

    .par__notif {
      margin-top: 20px;
      padding: 30px;
      background-color: #f9f7f4;
    }

    .title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 30px;
    }

    .image-wrap {
      width: 100%;
      margin-bottom: 20px;
    }

    .image-hint {
      font-style: italic;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.4);
    }

    @media (min-width: 460px) {
      .lead {
        flex-direction: row;
      }

      .lead__text {
        margin-right: 50px;
        margin-bottom: 0;
      }

      .lead__image-wrap {
        width: 100px;
      }

      .image-wrap {
        width: 50%;
        margin: 0 auto 20px;
      }

      .image-wrap_full-width {
        width: 100%;
      }

      .par_with-notif {
        flex-direction: row;
        align-items: flex-start;
      }

      .par__notif {
        flex: none;
        width: 200px;
        margin-top: 0;
        margin-left: 40px;
      }
    }
  `}</style>
);
