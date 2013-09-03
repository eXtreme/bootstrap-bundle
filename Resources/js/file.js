/**
 * Original code and Copyright
 * <http://www.abeautifulsite.net/blog/2013/08/whipping-file-inputs-into-shape-with-bootstrap-3/>
 *
 * adapted by Jacek Jędrzejewski <http://jacek.jedrzejewski.name/>
 */

$(function () {
    $(document).on('change', '.btn-file :file', function (ev) {
        var $this = $(this);

        var numFiles = $this.get(0).files ? $this.get(0).files.length : 1;
        var label = $this.val().replace(/\\/g, '/').replace(/.*\//, '');
        $this.trigger('fileselect', [numFiles, label]);
    });

    $(document).on('fileselect', '.btn-file :file', function (ev, numFiles, label) {
        var $input = $(this).closest('.input-group').find(':text');

        $input.val(label);
    });
});
