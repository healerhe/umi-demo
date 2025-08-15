export default {
  'GET /api/user/info': {
    name: '张三',
    age: 25,
    email: 'zhangsan@example.com',
    role: 'admin',
  },

  'POST /api/user/login': (req: any, res: any) => {
    const { username } = req.body;
    res.status(200).json({
      code: 0,
      data: { token: 'abc123', username },
      message: '登录成功',
    });
  },

  'GET /api/user/list': (req: any, res: any) => {
    const list = Array(10)
      .fill(1)
      .map((_, i) => ({
        id: i + 1,
        name: `用户${i + 1}`,
        age: 20 + (i % 30),
      }));
    res.status(200).json({ code: 0, data: list });
  },

  // 模拟延迟加载（如网络慢）
  'GET /api/user/slow': (req: any, res: any) => {
    setTimeout(() => {
      res.status(200).json({ code: 0, data: '响应延迟 2s' });
    }, 2000);
  },

  // 模拟错误
  'GET /api/user/error': (req, res) => {
    res.status(500).json({ code: -1, message: '服务器错误' });
  },
};
