exports.map = function map(sections, visitors) {
  return sections.map(function (sec) {
    var type = sec.contentType;
    if (type === 'style') {
      return visitors.style && visitors.style(sec.children[0]);
    } else if (type === 'demo') {
      return visitors.demo && visitors.demo(sec.children[0]);
    } else if (type === 'markdown') {
      return visitors.markdown && visitors.markdown(sec);
    }
  });
};
