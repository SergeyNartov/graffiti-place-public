const getPainterCard = (data) => ({ type: 'GET_PAINTER_CARD', payload: data });
const createPainterCard = (data) => ({ type: 'CREATE_PAINTER_CARD', payload: data });
const deletePainterCard = (id) => ({ type: 'DELETE_PAINTER_CARD', payload: id });

export const getPainterCardThunk = () => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_serverApi}/paintercard`); // заменить путь ручки для получения всех фото "у меня есть краска"
  const result = await response.json();
  dispatch(getPainterCard(result));
};

export const createPainterCardThunk = (body) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/paintercard`,
    {
      credentials: 'include',
      method: 'POST',
      body,
    },
  );
  const result = await response.json();
  dispatch(createPainterCard(result));
};

export const deletePainterCardThunk = (id) => async (dispatch) => {
  const response = await fetch(
    `${process.env.REACT_APP_serverApi}/paintercard/${id}`,
    {
      method: 'DELETE',
      credentials: 'include',
    },
  );
  if (response.status === 200) {
    dispatch(deletePainterCard(id));
  }
};
